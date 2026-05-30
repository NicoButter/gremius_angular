import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TrackingLocation {
  active: boolean;
  lat: number;
  lng: number;
  destination: string;
  status: string;
  updatedAt: number;
  accuracy?: number;
  heading?: number | null;
  speed?: number | null;
}

const firebaseConfig = {
  apiKey: 'AIzaSyANafZNUMbKL6XNG4XtyrMp2dK2vZfWxvI',
  authDomain: 'gremius-tracking.firebaseapp.com',
  databaseURL: 'https://gremius-tracking-default-rtdb.firebaseio.com',
  projectId: 'gremius-tracking',
  storageBucket: 'gremius-tracking.firebasestorage.app',
  messagingSenderId: '651333402304',
  appId: '1:651333402304:web:1d565c35288a2393377725',
};

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private readonly currentLocationPath = 'tracking/current';
  private databasePromise?: Promise<any>;
  private authPromise?: Promise<any>;

  watchCurrentLocation(): Observable<TrackingLocation | null> {
    return new Observable((subscriber) => {
      let unsubscribe: (() => void) | undefined;
      let closed = false;

      this.getDatabaseApi().then(({ db, onValue, ref }) => {
        if (closed) {
          return;
        }

        const currentRef = ref(db, this.currentLocationPath);
        unsubscribe = onValue(
          currentRef,
          (snapshot: any) => {
            subscriber.next(snapshot.exists() ? snapshot.val() as TrackingLocation : null);
          },
          (error: unknown) => subscriber.error(error)
        );
      }).catch((error) => subscriber.error(error));

      return () => {
        closed = true;
        unsubscribe?.();
      };
    });
  }

  async updateCurrentLocation(location: TrackingLocation): Promise<void> {
    const { db, ref, set } = await this.getDatabaseApi();
    return set(ref(db, this.currentLocationPath), location);
  }

  async signIn(email: string, password: string): Promise<void> {
    const { auth, signInWithEmailAndPassword } = await this.getAuthApi();
    await signInWithEmailAndPassword(auth, email, password);
  }

  async signOut(): Promise<void> {
    const { auth, signOut } = await this.getAuthApi();
    await signOut(auth);
  }

  private getDatabaseApi(): Promise<any> {
    if (!this.databasePromise) {
      this.databasePromise = Promise.all([
        import('firebase/app'),
        import('firebase/database'),
      ]).then(([appModule, databaseModule]) => {
        const app = this.getFirebaseApp(appModule);
        return {
          db: databaseModule.getDatabase(app),
          onValue: databaseModule.onValue,
          ref: databaseModule.ref,
          set: databaseModule.set,
        };
      });
    }

    return this.databasePromise;
  }

  private getAuthApi(): Promise<any> {
    if (!this.authPromise) {
      this.authPromise = Promise.all([
        import('firebase/app'),
        import('firebase/auth'),
      ]).then(([appModule, authModule]) => {
        const app = this.getFirebaseApp(appModule);
        return {
          auth: authModule.getAuth(app),
          signInWithEmailAndPassword: authModule.signInWithEmailAndPassword,
          signOut: authModule.signOut,
        };
      });
    }

    return this.authPromise;
  }

  private getFirebaseApp(appModule: any): any {
    const apps = appModule.getApps();
    return apps.length ? apps[0] : appModule.initializeApp(firebaseConfig);
  }
}

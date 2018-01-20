import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObsevable().subscribe(numero => console.log('subs ', numero),
      error => console.error('error en el obs', error),
      () => console.log('el observador terminó!'));

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObsevable(): Observable<number> {

    return new Observable(observer => {

      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        }

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   observer.error('Auxilio!');
        // }

      }, 500);
    }).retry(2).map((resp: any) => {
      return resp.valor
    })
      .filter((valor, index) => {

        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      });

  }

}

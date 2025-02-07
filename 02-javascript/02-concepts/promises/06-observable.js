const { Observable } = require('rxjs');

const myObservable = new Observable(observer => {
  observer.next('First value');
  observer.next('Second value');
  setTimeout(() => observer.next('Third value'), 2000);
  setTimeout(() => observer.complete(), 3000);
});

myObservable.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Observable completed'),
});

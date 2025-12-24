import { TestBed } from '@angular/core/testing';
import { DataService } from './data';
// Нові інструменти для тестування HTTP
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Product } from '../models/product.model';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController; // Фейковий бекенд

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        provideHttpClient(),        // Підключаємо HTTP
        provideHttpClientTesting()  // Підключаємо "Тестовий" HTTP
      ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Перевіряємо, що немає зайвих запитів
  });

  it('should retrieve items via GET', () => {
    const dummyProducts: Product[] = [
      { id: 1, title: 'Phone', price: 100, description: 'Desc', image: '' },
      { id: 2, title: 'Laptop', price: 500, description: 'Desc', image: '' }
    ];

    // 1. Викликаємо метод сервісу
    service.getItems().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    // 2. Ловимо запит, який мав полетіти
    const req = httpMock.expectOne('/products'); // Очікуємо запит на цю URL
    expect(req.request.method).toBe('GET');

    // 3. Віддаємо фейкові дані
    req.flush(dummyProducts);
  });
});
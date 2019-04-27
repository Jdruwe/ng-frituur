import {of} from 'rxjs';
import {SnacksService} from './snacks.service';
import {SnacksStore} from './snacks.store';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Snack} from './snack.model';
import {Category} from './category.model';

describe('SnacksService', () => {
  let snacksService: SnacksService;
  let snacksStore: SnacksStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnacksService, SnacksStore],
      imports: [HttpClientTestingModule]
    });

    snacksService = TestBed.get(SnacksService);
    snacksStore = TestBed.get(SnacksStore);
  });

  it('should be created', () => {
    expect(snacksService).toBeDefined();
  });

  it('should set snacks.', () => {
    const mockSnacks: Snack[] = [
      {
        id: 4,
        name: 'fishfingers',
        description: 'Heerlijk malse vis in een krokant korstje. Wordt mooi gepresenteerd in een originele Mora pocket.',
        category: 4
      },
      {
        id: 5,
        name: 'frikandel',
        description: 'Heerlijk gekruide vleesfrikandel, voorgegaard.',
        category: 2
      }
    ];
    spyOn<any>(snacksService, 'call').and.returnValue(of(mockSnacks));
    spyOn(snacksStore, 'set').and.callThrough();
    snacksService.getData().subscribe();
    expect(snacksStore.set).toHaveBeenCalledWith(mockSnacks);
  });

  it('should set categories.', () => {
    const mockCategories: Category[] = [
      {
        id: 1,
        name: 'oosters'
      },
      {
        id: 2,
        name: 'vlees'
      }
    ];
    spyOn<any>(snacksService, 'call').and.returnValue(of(mockCategories));
    spyOn(snacksStore, 'update').and.callThrough();
    snacksService.getData().subscribe();
    expect(snacksStore.update).toHaveBeenCalledWith({
      categories: mockCategories
    });
  });
});

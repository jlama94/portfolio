import { TestBed } from '@angular/core/testing';

import { GithubResolverService } from './github-resolver.service';

describe('GithubResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubResolverService = TestBed.get(GithubResolverService);
    expect(service).toBeTruthy();
  });
});

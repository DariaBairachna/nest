import { Response } from 'express';
import { TestService } from './test.service';
import { CreateModel } from './interface/test.interface';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    findAll(): void;
    createGet(queryParams: CreateModel): string;
    create(CreateModel: CreateModel, res: Response): void;
}

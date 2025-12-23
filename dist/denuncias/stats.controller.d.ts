import { DenunciasService } from './denuncias.service';
export declare class StatsController {
    private readonly denunciasService;
    constructor(denunciasService: DenunciasService);
    getStats(): Promise<{
        total: number;
        byStatus: {};
        byCategory: {};
    }>;
}

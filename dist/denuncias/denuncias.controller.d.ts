import { DenunciasService } from './denuncias.service';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class DenunciasController {
    private readonly denunciasService;
    constructor(denunciasService: DenunciasService);
    findAll(status: string, category: string): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            email: string;
            name: string;
        };
    } & {
        status: string;
        category: string;
        id: number;
        title: string;
        description: string;
        lat: number | null;
        lng: number | null;
        address: string | null;
        imageUrl: string | null;
        createdAt: Date;
        userId: number;
    })[]>;
    findByUser(userId: number): Promise<any[]>;
    create(createDenunciaDto: CreateDenunciaDto, req: any, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__ComplaintClient<{
        status: string;
        category: string;
        id: number;
        title: string;
        description: string;
        lat: number | null;
        lng: number | null;
        address: string | null;
        imageUrl: string | null;
        createdAt: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getStats(): Promise<{
        total: number;
        byStatus: {};
        byCategory: {};
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ComplaintClient<({
        user: {
            email: string;
            name: string;
        };
    } & {
        status: string;
        category: string;
        id: number;
        title: string;
        description: string;
        lat: number | null;
        lng: number | null;
        address: string | null;
        imageUrl: string | null;
        createdAt: Date;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateStatus(id: number, updateStatusDto: UpdateStatusDto, req: any): import(".prisma/client").Prisma.Prisma__ComplaintClient<{
        status: string;
        category: string;
        id: number;
        title: string;
        description: string;
        lat: number | null;
        lng: number | null;
        address: string | null;
        imageUrl: string | null;
        createdAt: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number, req: any): Promise<{
        status: string;
        category: string;
        id: number;
        title: string;
        description: string;
        lat: number | null;
        lng: number | null;
        address: string | null;
        imageUrl: string | null;
        createdAt: Date;
        userId: number;
    }>;
}

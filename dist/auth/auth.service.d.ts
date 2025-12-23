import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        name: string;
        id: number;
        email: string;
        role: string;
        avatar: string | null;
    } | null>;
    login(user: Omit<User, 'password'>): {
        access_token: string;
    };
    register(data: any): Promise<{
        name: string;
        id: number;
        email: string;
        role: string;
        avatar: string | null;
    }>;
}

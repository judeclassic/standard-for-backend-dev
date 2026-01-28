import { Request, Response } from 'express'
import ProfileService from './profile.service';
import { IUpdateNotification, IUpdateProfile, IUpdateProfileEmails, IUpdateProfileImage } from './profile.type';
import { ResponseProps } from '@/utils/types/types';
import { ISecureMerchant } from '@/models/merchant/types';

class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    getProfile = async (req: Request, res: Response) => {
        const response = await this.profileService.getProfile(req.userAuth);
        res.status(response.status ? 200 : 400).json(response);
    }

    updateProfile = async (req: Request<{}, any, IUpdateProfile>, res: Response<ResponseProps<ISecureMerchant>>) => {
        const response = await this.profileService.updateProfile(req.userAuth, req.body);
        res.status(response.status ? 200 : 400).json(response);
    }

    updateNotification = async (req: Request<{}, any, IUpdateNotification>, res: Response<ResponseProps<ISecureMerchant>>) => {
        const response = await this.profileService.updateNotification(req.userAuth, req.body);
        res.status(response.status ? 200 : 400).json(response);
    }

    updateProfileImage = async (req: Request<{}, any, IUpdateProfileImage>, res: Response<ResponseProps<ISecureMerchant>>) => {
        const response = await this.profileService.updateProfileImage(req.userAuth, { image: req.file?.filename });
        res.status(response.status ? 200 : 400).json(response);
    }

    updateProfileEmails = async (req: Request<{}, any, IUpdateProfileEmails>, res: Response<ResponseProps<ISecureMerchant>>) => {
        const response = await this.profileService.updateProfileEmails(req.userAuth, req.body);
        res.status(response.status ? 200 : 400).json(response);
    }
}

export default ProfileController;
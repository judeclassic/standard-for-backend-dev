import { Request, Response } from 'express';
import ProfileService from './transaction.service';
import { IGetTransaction, IGetTransactions } from './transaction.type';

class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  getTransaction = async (req: Request<IGetTransaction>, res: Response) => {
    try {
      const response = await this.profileService.getTransaction(req.userAuth, req.params);
      res.status(response.status ? 200 : 400).json(response);
    } catch (err) {
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  };

  getTransactions = async (req: Request<{}, {}, {}, any>, res: Response) => {
    try {
      const response = await this.profileService.getTransactions(req.userAuth, req.query as IGetTransactions);
      res.status(response.status ? 200 : 400).json(response);
    } catch (err) {
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  };
}

export default ProfileController;
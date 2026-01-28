import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ISecureAdmin, IAdmin } from './type';

@Entity('admins')
export class Admin implements IAdmin {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email_address!: string;

  get toResponse(): ISecureAdmin {
    return {
      id: this.id,
      name: this.name,
      email_address: this.email_address,
    }
  }
}

export * from "./type"

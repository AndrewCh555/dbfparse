import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'dbfData' })
export class DbfRecord extends Model<DbfRecord> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  leistnr: number;

  @Column({ type: DataType.STRING, allowNull: true })
  leistung: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  preis: number;

  @Column({ type: DataType.STRING, allowNull: true })
  kname: string;
}

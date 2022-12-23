import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true, })
  title: string;

  @Column('numeric', { default: 0 })
  price: number;

  @Column({
    type: 'text',
    nullable: true
  })
  description: string;

  @Column('text', { unique: true })
  slug: string;

  @Column('int', { default: 0 })
  stock: number;

  @Column('text', { array: true })
  sizes: string[];

  @Column('text')
  gender: string;
  
  @Column('text', { 
    array: true,
    default: []     //En caso de no enviar nada, se define como array
  })
  tags: string[];
  //images


  @BeforeInsert()
  @BeforeUpdate()
  checkSlug() {
    if (!this.slug) {
      this.slug = this.title

    } else {
      this.slug = this.slug
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '')

    }
     
  }
}
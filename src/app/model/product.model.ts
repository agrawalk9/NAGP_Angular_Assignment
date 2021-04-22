export class Product {

    private id: string;
    private name: string;
    private description: string;
    private category: string;
    private price: Number;
    private quantity: Number;
    private imageUrl: string;

    constructor(id: string, name: string, description: string, category: string, price: Number, quantity: Number, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCategory(): string {
        return this.category;
    }

    public getPrice(): Number {
        return this.price;
    }

    public getQuantity(): Number {
        return this.quantity;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public setId(value: string): void {
        this.id = value;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public setDescription(value: string): void {
        this.description = value;
    }

    public setCategory(value: string): void {
        this.category = value;
    }

    public setPrice(value: Number): void {
        this.price = value;
    }

    public setQuantity(value: Number): void {
        this.quantity = value;
    }

    public setImageUrl(value: string): void {
        this.imageUrl = value;
    }
}

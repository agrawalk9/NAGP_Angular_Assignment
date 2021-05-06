export class Product {

    private id: string;
    private name: string;
    private description: string;
    private category: string;
    private unitPrice: number;
    private price: number;
    private quantity: number;
    private imageUrl: string;

    constructor(id: string, name: string, description: string,
                category: string, price: number, quantity: number,
                imageUrl: string, unitPrice: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.unitPrice = unitPrice;
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

    public getPrice(): number {
        return this.price;
    }

    public getUnitPrice(): number {
        return this.unitPrice;
    }

    public getQuantity(): number {
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

    public setPrice(value: number): void {
        this.price = value;
    }

    public setUnitPrice(value: number): void {
        this.unitPrice = value;
    }

    public setQuantity(value: number): void {
        this.quantity = value;
    }

    public setImageUrl(value: string): void {
        this.imageUrl = value;
    }
}

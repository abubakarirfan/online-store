class Product {

    contructor(type, name, desc, image, price) {
        this.type = type;
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.price = price;
    }
// Get //
    getType() {
        return this.type;
    }

    getName() {
        return this.name;
    }

    getDesc(){
        return this.desc;
    }

    getImage(){
        return this.image
    }

    getPrice(){
        return this.price
    }
// Set //
    setType(type) {
        this.type = type;
    }

    setName(name) {
        this.name = name;
    }

    setDesc(desc) {
        this.desc = desc;
    }

    setImage(image) {
        this.image = image;
    }

    setPrice(price) {
        this.price = price;
    }

};
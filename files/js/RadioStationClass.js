class RadioStation {
    constructor(id, name, ip, image) {
        this.id = id;
        this.name = name;
        this.ip = ip;
        this.image = image;
        this.type = "audio/mpeg";
        this.source = {
            src: this.ip,
            type: this.type
        }
    }
}
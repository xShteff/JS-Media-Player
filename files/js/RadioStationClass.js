class RadioStation {
    constructor(name, ip, image) {
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
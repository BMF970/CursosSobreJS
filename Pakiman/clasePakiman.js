class Pakiman
{
    constructor(n, v, a)
    {
    this.image = new Image();
    this.name = n;
    this.health = v;
    this.atack = a;

    this.image.src = images[this.name];
    }
    hablar()
    {
        alert(this.name);
    }

    show(){
        document.body.appendChild(this.image);
        document.write("<br/><strong>" + this.name + "</strong><br/>");
        document.write("Health: " + this.health + "<br/>");
        document.write("atack: " + this.atack + "<hr/>");
    }
}
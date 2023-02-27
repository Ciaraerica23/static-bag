class Bag {
    static maxWeight=23
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        this.weight = weight
        if(this.weight>Bag.maxWeight){
            throw new Error('max weight reached')
        }
    }
    
}

module.exports = Bag
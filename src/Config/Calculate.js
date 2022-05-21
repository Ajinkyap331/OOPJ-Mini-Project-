import Data from '../Modules/Data'

export default class Calculate extends Data {
    static IQ = (index, YoN) => {
        for (var i = 0; i < this.Name.length; i++) {
            if(YoN === 2){
                this.fav = 0.05
                continue
            }
            if (this.YN[i][index] === YoN)
                this.fav[i] += 0.2
            else
                this.fav[i] -= 0.2   
        }
        // console.log(fav[0], fav[1])
        var max = -1;
        for (var i = 0; i < this.Name.length; i++) {
            if (this.fav[i] >= 0.8) {
                max = i;
                break
            }
        }
        return max;
    }
}


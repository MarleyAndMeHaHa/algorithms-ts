import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let result = undefined
    let higherptr= items.length-1;
    let lowerptr : number = 0;
    while (result===undefined){

        let middle_ptr : number = Math.floor((higherptr+lowerptr)/2);
        if (items[middle_ptr]===item){
            result = middle_ptr
        }
        else if (lowerptr===higherptr){
            result=NO_MATCH

        }
        else if (items[middle_ptr]<item){
            lowerptr=middle_ptr+1;
    
        }
        else if (items[middle_ptr]>item){
            higherptr=middle_ptr-1;
        }    
    }

    return result;
}

export default binarySearch;
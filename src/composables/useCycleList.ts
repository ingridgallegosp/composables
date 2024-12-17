import { computed, ref, type Ref } from 'vue';
// First we create a function that will return an object with the state and the methods will need to use
// return functions
/*
export const useCycleList = (list:any[]) => {
    return{
        state: ref(''),
        next: ()=>{},
        prev: ()=>{},
        go: ()=>{},
    }
}
*/
//export const useCycleList = (list:any[]) => {
export const useCycleList = <T>(list:Ref<T[]>) => {
        
    const activeIndex = ref(0);
    const state = computed(()=> list[activeIndex.value]);
    
    const prev = ()=>{
        if(activeIndex.value===list.length-1){
            activeIndex.value = 0;
        }else{
            activeIndex.value++;
        }
    };
 
    const next = ()=>{
        if(activeIndex.value===0){
            activeIndex.value = list.length-1;
        }else{
            activeIndex.value--;
        }
    };
    
    const go = (index: number) => {
        if (index >= list.length) {
            alert(`Cannot go to index ${index}. The list provided to useCycleList is not that long.`);
        } else {
            activeIndex.value = index;
        }
    };
    
    return{
        //state:state is equivalent to just state
        state,
        next,
        prev,
        go,
    }
};
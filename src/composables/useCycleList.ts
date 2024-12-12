import { computed, ref } from 'vue';
// First we create a function that will return an object with the state and the methods will need to use
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
export const useCycleList = (list:any[]) => {
    const activeIndex = ref(0);
    const state = computed(()=> list[activeIndex.value]);
    
    const next = ()=>{
        if(activeIndex.value===list.length-1){
            activeIndex.value = 0;
        }else{
            activeIndex.value++;
        }
    };
    
 
    const prev = ()=>{
        if(activeIndex.value===0){
            activeIndex.value = list.length-1;
        }else{
            activeIndex.value--;
        }
    }
    return{
        //state:state is equivalent to just state
        state,
        next,
        prev,
        go: ()=>{},
    }
}
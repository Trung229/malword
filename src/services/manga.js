export const fetchAPI = async (dispatch, getState) => {
    const payload = getState();
    try{
        console.log(payload.id);
        const docRef =doc(db, 'users', payload.id)
        console.log(docRef)
        const noodleSnapshot = await getDoc(docRef);
        console.log(noodleSnapshot)
        dispatch({
            type: 'noodle/saveData',
            payload:noodleSnapshot.data(),
        })
    }catch(err){
        console.log(err)
    }
}
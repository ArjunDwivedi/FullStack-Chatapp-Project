
function submitform(event){
    event.preventDefault();

let expenseDetails = {
    amount:event.target.amount.value,
    description:event.target.description.value,
    category:event.target.category.value
}
console.log(expenseDetails);
axios.post("http://localhost:3000/expense",expenseDetails).then((res)=>{
    console.log(res);
    if(res.status===201){
        // alert(res.data.message)
        window.location.reload();
    }
})

}

function getData(e){
    console.log(e);
    axios.get("http://localhost:3000/getexpense").then((res)=>{
        console.log(res);
        if(res.status===200){
            const expenseList = document.getElementById("expenselist");
            const data = res.data.getExpense

            data.forEach(expense => {
                expenseList.innerHTML+=
                `<li id = ${expense.id}>
                Amount: ${expense.amount},Description: ${expense.description},Category: ${expense.category}\
                <button onClick= editExpense(${expense.id},${expense.amount},'${expense.description}','${expense.category}')>Edit</button>
                <button onClick= deleteExpense(${expense.id})>Delete</button>
                </li>`
                
            });
        }
});
}
function removeExpense(id){
    const expenseList = document.getElementById("expenselist");
    const removeExpensefromlist = document.getElementById(id);
    expenseList.removeChild(removeExpensefromlist);
}

function editExpense(id,amount,description,category){
    
    document.getElementById("amount").value = amount;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;
    removeExpense(id);
   editdeleteExpense(id);
}
function editdeleteExpense(id){
    axios.delete(`http://localhost:3000/deleteExpense/${id}`).then((res)=>{
        if(res.status==202){
            
            
        }
    })
}
function deleteExpense(id){
    console.log(id);
    axios.delete(`http://localhost:3000/deleteExpense/${id}`).then((res)=>{
        if(res.status==202){
            window.location.reload();
            // alert(res.data.message);
            
        }
    })
}


window.addEventListener("DOMContentLoaded",getData);
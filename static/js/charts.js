// Bar Chart - Top 10 most expensive -
function mostExpensiveChart(){
    const mostExpensive = data
        .filter(row=>row.Year=2022)
        .sort((a,b)=>b.Cost_of_Living_Plus_Rent_Index-a.Cost_of_Living_Plus_Rent_Index)
        .slice(0,10)
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: mostExpensive.map(row=>row.Country),
            datasets:[{
                label:"Cost Of Living (inc rent) Index",
                data:mostExpensive.map(row=>row.Cost_of_Living_Plus_Rent_Index),
                backgroundColor:["blue","red","orange","yellow","green","purple","pink","cyan","grey", "black"]

            }]      
        }

    })
}
// Least Expensive

// Bar Chart - Top 10 least expensive
function leastExpensiveChart(){
    const leastExpensive = data
        .filter(row=>row.Year=2022)
        .sort((a,b)=>a.Cost_of_Living_Plus_Rent_Index-b.Cost_of_Living_Plus_Rent_Index)
        .slice(0,10)
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: leastExpensive.map(row=>row.Country),
            datasets:[{
                label:"Cost Of Living (inc rent) Index",
                data:leastExpensive.map(row=>row.Cost_of_Living_Plus_Rent_Index),
                backgroundColor:["blue","red","orange","yellow","green","purple","pink","cyan","grey", "black"]
            }]      
        }

    })
}

// Bar Chart - Rent Index -
function rentIndexChart(){
    const rentIndex = data
        .filter(row=>row.Year=2022)
        .sort((a,b)=>b.Rent_Index-a.Rent_Index)
        .slice(0,10)
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: rentIndex.map(row=>row.Country),
            datasets:[{
                label:"Rent Index",
                data:rentIndex.map(row=>row.Rent_Index),
                backgroundColor:["blue","red","orange","yellow","green","purple","pink","cyan","grey", "black"]
            }]      
        }

    })
}

// Heat Map - 

function heatmapChart(){

}

function selectChange(){
   const value=document.getElementById("select").value
   if (value=="heatmap"){ 
    heatmapChart()
   } else if (value=="most-expensive bar chart") {
    mostExpensiveChart()
   } else if (value=="cheapest bar chart") {
    leastExpensiveChart()
   } else if (value=="rent index") { 
    rentIndexChart()
   }
}

heatmapChart()
<script lang="ts" setup>


let date = new Date();
let datePlayQuiz = `${date.getDate()} " + " ${date.getMonth()} " + " ${date.getFullYear()}`

console.log(datePlayQuiz);



</script>

<template>
    <div class="range__block">
        <div class="container">
            <div class="range__block__content">
                <table id="">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>MAIL</th>
                      <th>DATE DE QUIZ</th>
                      <th>SCORE</th>
                      <th>RANG</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr>
                      <td>1</td>
                      <td>example@gmail.com</td>
                      <td>20/02/2000</td>
                      <td>2</td>
                      <td>5ème</td>
                      <td>
                        <a href="#" class="edit">
                          <span title="editer" class="mdi mdi-pencil"></span>
                        </a>
                        <a href="#" class="delete">
                          <span  title="effacer" class="mdi mdi-delete"></span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<style scoped>
 table{
margin-top: 4rem;
width: 100%;
background-color: var(--white);
padding: var(--padding-card);
border-radius: var(--border-radius-card);
box-shadow: var(--box-shadow-card);
text-align: center;
transition: box-shadow 0.33s ease-in-out;
overflow: hidden;
border-spacing: 0;
margin-bottom: 4rem;

}

  table:hover {
box-shadow: var(--box-shadow-card-2);
}

 tbody td,
  thead th {
padding: 12px 24px;
}

 table tbody tr {
border: 1px solid transparent;
border-bottom-color: var(--desaturate-cyan);
transition: 0.15s ease-in;
}
  tbody tr:last-child {
border-bottom-color: transparent;
}

 tbody tr:first-child {
border-top-color: var(--desaturate-cyan);
}
  table tbody tr:nth-child(2n + 1) {
background-color: var(--desaturate-fuscha-2);
}

 tbody tr:hover {
background-color: var(--desaturate-cyan-2) !important;
}

  table tbody tr .mdi-pencil{
color: gray;
font-size: 26px;
}
 table tbody tr .mdi-delete{
/*   background-color: #e96e93; */
color: #e96e93;
font-size: 28px;
}

</style>
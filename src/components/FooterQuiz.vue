<template>
    <footer>
        <div class="container">
            <div class="footer__content">
                <div class="footer-left">
                    <RouterLink to="/quizCategory" class="lo">Quizzer</RouterLink>
                </div>
                <div class="footer-right">
                    <ul>
                        <li><a href="#" title="whatsapp" class="mdi mdi-whatsapp"></a></li> 
                        <li><a href="#" title="facebook" class="mdi mdi-facebook"></a></li>
                        <li><a href="#" title="linkedin" class="mdi mdi-linkedin"></a></li>
                        <li><a href="#" title="twitter" class="mdi mdi-twitter"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer__content{ 
    padding:8rem 0 2rem 0; 
    border-top: 2px solid var(--color-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer .footer-right ul{
    display: flex;
    color: #eee;
}
footer .footer-right ul li{
    padding: 1rem 2rem;
    
}
footer .footer-right ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 3px solid #eee;
    color: #2c9bc6;
    font-size: 40px;
}
footer .footer-right ul li .mdi{
    color: #2c9bc6;
}
footer .footer-right ul li .mdi:hover{
    box-shadow: 0px 0px 10px white;
}
</style>
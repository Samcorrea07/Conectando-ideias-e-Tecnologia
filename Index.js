
<script>
    // Efeito de hover nos membros da equipe
    document.querySelectorAll('.integrante').forEach(membro ={
        membro.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        })

        .addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'
        
    

    // Atualização dinâmica do ano no footer
    .querySelector('footer p:last-child').innerHTML = 
        `Desenvolvido por DevTeam - ${new Date().getFullYear()} © Todos os direitos reservados`;

    // Alerta de boas-vindas
    window.onload = function() {
        alert('Bem-vindo ao nosso site de projetos!');
    }
    
</script>
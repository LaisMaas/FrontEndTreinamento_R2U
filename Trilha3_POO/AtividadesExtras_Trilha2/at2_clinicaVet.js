/*Uma clínica veterinária deseja cadastrar os pets que são atendidos na clínica. A clínica contém um endereço;  Os pets deverão ter nome, data de nascimento, tipo de pet;  Os pets deverão ter raça;  Os pets deverão ter donos;  A clínica deseja cadastrar seus veterinários e todo atendimento de pet será feito por um vet*/


//Estabelecendo a classe clinica da aplicação
class Clinica {
    razaoSocial;
    logradouro;
    numero;
    bairro;
    cidade;
    estado;
}

//Constuindo o objeto clinica matriz e filial da aplicação
const clinicaMatriz = new Clinica();
const clinicaFilial1 = new Clinica();

//Instânciando os objetos clinica matriz e filial1 da aplicação
clinicaMatriz.razaoSocial = 12345678901234;
clinicaMatriz.logradouro = "Avenida Saúde";
clinicaMatriz.numero = 1;
clinicaMatriz.bairro = "Remédios"; 
clinicaMatriz.cidade = "São Paulo";
clinicaMatriz.estado = "SP";

clinicaFilial1.razaoSocial = 12345678901235;
clinicaFilial1.logradouro = "Rua N";
clinicaFilial1.numero = 7;
clinicaFilial1.bairro = "Jd. São Paulo";
clinicaFilial1.cidade = "São Paulo";
clinicaFilial1.estado = "SP";


//Estabelecendo a classe veterinario da aplicação
class Veterinario{
    nome;
    crmv;
}

//Constuindo o objeto veterinario clinico e cirurgião da aplicação
const veterinarioClinico = new Veterinario();
const veterinarioCirurgiao = new Veterinario();

veterinarioClinico = new Veterinario();
veterinarioCirurgiao = new Veterinario();

veterinarioClinico.nome = "Dn. Florinda";
veterinarioClinico.crmv = "12345-SP";

veterinarioCirurgiao.nome = "Sr. Madruga";
veterinarioCirurgiao.crmv = "12346-MG";

////Instânciando os objetos atendimentos da aplicação*******/   
class atendimento{
    data;
    hora;
    texct;
}

const atendimento1 = new atendimento();
const atendimento2 = new atendimento();
const atendimento3 = new atendimento();


atendimento1.data = " ";
atendimento1.hora = " ";
atendimento1.texct = " ";

atendimento2.data = " ";
atendimento2.hora = " ";
atendimento2.texct = " ";

atendimento3.data = " ";
atendimento3.hora = " ";
atendimento3.texct = " ";

class Pet{
    nome;
}

const pet1 = new Pet;
const pet2 = new Pet;
const pet3 = new Pet;

pet1.nome = "Costelinha";
pet2.nome = "Doguinho";
pet3.nome = "Mic";

class TipoPet{
    tipo;
 }


tipoPet1 = new TipoPet();
tipoPet2 = new TipoPet();
tipoPet3 = new TipoPet();

tipoPet1.tipo = "Cachorro";
tipoPet2.tipo = "Cachorro";
tipoPet3.tipo = "Mico";

class Raca{
    descritivoRaca;
}

const raca1 = new Raca();
const raca2 = new Raca();
const raca3 = new Raca();

raca1.descritivoRaca = "Dálmata";
raca2.descritivoRaca = "Vira-lata";
raca3.descritivoRaca = "Mico leão dourado";

class Dono{
    nome;
    sobrenome;    
}

const dono1 = new Dono();
const dono2 = new Dono();
const dono3 = new Dono();

dono1.nome = "Doug";
dono1.sobrenome = "Fanny";

dono2.nome = "Paty";
dono2.sobrenome = "Maionese";

dono3.nome = "Chaves";
dono3.sobrenome = "B";


class Contato{
    ddd;
    telefone;
}

const contato1 = new Contato();
const contato2 = new Contato();
const contato3 = new Contato();

contato1.ddd = 11;
contato1.telefone = 970708070;

contato2.ddd = 11;
contato2.telefone = 550507070;

contato3.ddd = 11;
contato3.telefone = 901100110;
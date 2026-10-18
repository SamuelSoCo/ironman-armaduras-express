//Importamos express asi como path y creamos una instancia
const express=require('express');
const path=require('path');

const app=express();

//Middleware para procesar datos de formularios y de JSON
app.use(express.json());
//.urlencoded solo en el caso de usar form en html
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));

//servir carpetas de recursos estaticos para estilos e imagenes a utilisar
app.use('/CSS',express.static(path.join(__dirname,'CSS')));
app.use('/imagenes',express.static(path.join(__dirname,'imagenes')));

//servimos todos los archivos detro de la carpeta public los cuales son los html para tener 7 paginas
app.use(express.static(path.join(__dirname,'public')));

//Ruta principal por defecto de nuestro citio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Rutas explícitas con .html
app.get('/page_1.html', (req, res) => res.sendFile(path.join(__dirname, 'page_1.html')));
app.get('/page_2.html', (req, res) => res.sendFile(path.join(__dirname, 'page_2.html')));
app.get('/page_3.html', (req, res) => res.sendFile(path.join(__dirname, 'page_3.html')));
app.get('/page_4.html', (req, res) => res.sendFile(path.join(__dirname, 'page_4.html')));
app.get('/page_5.html', (req, res) => res.sendFile(path.join(__dirname, 'page_5.html')));
app.get('/page_6.html', (req, res) => res.sendFile(path.join(__dirname, 'page_6.html')));

//Rutas limpias sin el .html
app.get('/page_1',(req,res)=>res.sendFile(path.join(__dirname,'page_1.html')));
app.get('/page_2',(req,res)=>res.sendFile(path.join(__dirname,'page_2.html')));
app.get('/page_3',(req,res)=>res.sendFile(path.join(__dirname,'page_3.html')));
app.get('/page_4',(req,res)=>res.sendFile(path.join(__dirname,'page_4.html')));
app.get('/page_5',(req,res)=>res.sendFile(path.join(__dirname,'page_5.html')));
app.get('/page_6',(req,res)=>res.sendFile(path.join(__dirname,'page_6.html')));



//Preuba de una Api para mostrar en una pagina
app.get('/api/estado',(req,res)=>{
    res.json({mansaje:"Servidor activo",totalPaginas:7})
});

//Inicializacion del puerto 
const PORT=process.env.PORT || 3011;
app.listen(PORT,()=>{
    console.log(`Servidor iniciado con exito.`);
    console.log(`Accede qui -> http://localhost:${PORT}`);
});


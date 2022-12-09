// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
// import Label from '../../../components/Label';
// import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <img alt='Navbar Icon!!!' src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  icon1: getIcon('icon_1'),
  icon2: getIcon('icon_2'),
  icon3: getIcon('icon_3'),
  icon4: getIcon('icon_4'),
  icon5: getIcon('icon_5'),
  icon6: getIcon('icon_6'),
  icon7: getIcon('icon_7'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      {
        title: 'Comercio Exterior ',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.icon1,
        children: [
          { title: 'Exportaciones', path: '#' },
          { title: 'Importanciones', path: '#' },
        ],
      },
      {
        title: 'Titulos Habilitantes',
        path: '',
        icon: ICONS.icon2,
        children: [
          { title: 'Concesiones', path: '#' },
          { title: 'Autorizaciones', path: '#' },
          { title: 'Permisos', path: '#' },
        ],
      },
      {
        title: 'Control de Productos',
        path: '',
        icon: ICONS.icon3,
        children: [
          { title: 'Productos transferidos', path: '#' },
          { title: 'Productos Forestales Clasificados para ser Transferidos', path: '#' },
        ],
      },
      {
        title: 'Produccion, Industria y ...',
        path: '',
        icon: ICONS.icon4,
        children: [
          { title: 'Producción Forestal', path: '#' },
          { title: 'Depósitos y establecimientos', path: '#' },
          { title: 'Centros de transformación', path: '#' },
          { title: 'Precios Forestales', path: '#' },
        ],
      },
      {
        title: 'Fauna silvestre ',
        path: '',
        icon: ICONS.icon5,
        children: [
          { title: 'Curso de educación, seguridad y ética en la caza deportiva', path: '#' },
          { title: 'Licencias de caza deportiva', path: '#' },
          { title: 'Registro de Empresas Autorizadas', path: '#' },
          { title: 'Centro de manejo/cría de fauna silvestre', path: '#' },
        ],
      },
      {
        title: 'Camélidos Sudamericanos ...  ',
        path: '',
        icon: ICONS.icon5,
        children: [
          { title: 'Camélidos Sudamericanos', path: '#' },
          { title: 'Declaraciones de Manejo', path: '#' },
        ],
      },
      {
        title: 'Registros Nacionales',
        path: '',
        icon: ICONS.icon6,
        children: [
          { title: 'Regentes Forestales y de Fauna Silvestre', path: '#' },
          { title: 'Plantaciones Forestales', path: '#' },
          { title: 'Infractores', path: '#' },
          { title: 'Especialistas', path: '#' },
        ],
      },
      {
        title: 'Otros Registros ',
        path: '',
        icon: ICONS.icon6,
        children: [
          { title: 'Registro de Acceso a Recursos Genéticos', path: '#' },
          { title: 'Instituciones Científicas Nacionales Depositarias de Material Biológico', path: '#' },
        ],
      },
      {
        title: 'Publicaciones',
        path: '',
        icon: ICONS.icon7,
        children: [
          { title: 'Anuarios', path: '#' },
          { title: 'Boletines', path: '#' },
          { title: 'Tablas Maestras', path: '#' },
        ],
      },
      {
        title: 'Videotutoriales',
        path: '',
        icon: ICONS.icon1,
        children: [
          { title: 'Aplicativo de vicuñas', path: '#' },
          { title: 'Plantaciones Forestales', path: '#' },
        ],
      },
    ],
  },
];

export default navConfig;

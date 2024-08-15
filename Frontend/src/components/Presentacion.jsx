import React from 'react'

export const Presentacion = () => {
  return (
    <div className="container mx-auto px-6 py-6 ">
        <hr className="w-full h-1 mx-auto mb-3 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <a href='https://cesesptlax.gob.mx/'><img src="/sesesp_logo.png" alt="Logo Tlaxcala" className="lg:w-38 lg:h-40 mx-auto mt-8"/> </a>
        <div className='pt-12'>
            <h1 className="text-3xl text-center text-gray-800 dark:text-gray-100 font-bold italic">Bienvenido al sistema de inventario</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-2">Este sistema te permitira llevar un control de los activos de la institucion</p>
            <hr className="w-full h-1 mx-auto my-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/> 
            <div className='flex justify-center px-6 text-default-400 italic max-h-96 overflow-y-auto'>
              <p className="text-justify text-gray-500 dark:text-gray-400">
              <b className='text-2xl'>¿Quienes somos?</b><br/>
                El Secretariado Ejecutivo del Sistema Estatal de Seguridad Pública es un Órgano Desconcentrado del Gobierno Estatal, 
                que funge como enlace con el Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública y demás instancias de Seguridad del Gobierno Federal. 
                Entre otras funciones, el SESESP se encarga de vigilar el cumplimiento de la Ley General del Sistema Nacional de Seguridad Pública en el Estado; 
                del programa rector de Seguridad Pública del Gobierno de México, de coordinar y vigilar la correcta aplicación de fondos federales en materia de seguridad, 
                así como de dar seguimiento a los Acuerdos emanados del Consejo Nacional de Seguridad Pública.  A nivel estatal, coadyuva en coordinar y articular 
                a las corporaciones de Seguridad, Emergencias, Procuración de Justicia y Protección Civil de los tres órdenes de gobierno, para la atención de incidentes 
                que vulneren la integridad de las personas y su patrimonio, a fin de contribuir al clima de tranquilidad de la población tlaxcalteca.
                <br/>
                El Secretariado Ejecutivo también se encarga de los procesos de Certificación de Control y Confianza de los cuerpos de Seguridad Pública estatal y municipal, 
                así como de la Procuración de Justicia y de albergar las bases de datos criminalísticas, Plataforma México, Registro Nacional de Personas Detenidas, 
                Informes Policiales Homologados, Registro Público Vehicular, entre otras bases de datos relacionadas a la Seguridad Pública.
                <br/>
                Finalmente, desde El Secretariado Ejecutivo, través del Centro Estatal de Prevención Social, coordina las tareas de Prevención del delito en el Estado.
                <br/><br/>
                <b className='text-2xl'>Objetivo</b><br/>
                Establecer un conjunto de principios, valores y reglas de integridad que orienten, en un marco de aspiración a la excelencia, el desempeño de las funciones
                 y la toma de decisiones de las personas servidoras públicas que desempeñen un cargo o comisión dentro del Secretariado Ejecutivo del Sistema Estatal de 
                 Seguridad Pública, asumiéndolos como líderes en la construcción de la nueva ética pública.<br/><br/>
                <b className='text-2xl'>Misión</b><br/>
                Ser un organismo público desconcentrado que coadyuve a la ministración de recursos de los fondos y subsidios destinados para la Seguridad Pública mediante 
                la coordinación administrativa y de operación de los recursos humanos, materiales y financieros con los que cuenta dicho Secretariado Ejecutivo, a fin de 
                cumplir los términos y plazos que establece la normatividad vigente.<br/><br/>
                <b className='text-2xl'>Vision</b><br/>
                Ser una Secretariado Ejecutivo innovador que garantice un servicio de calidad en los procesos de ministración de recursos de los fondos y subsidios destinados 
                para la Seguridad Pública, mediante la implementación de tecnológica vanguardista, modernización de procesos estandarizados y sistematizados para obtener certeza 
                jurídico-administrativa que contribuya con los fines de la Seguridad Pública.
                </p> 
              </div>    
        </div>   
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <a href='https://cesesptlax.gob.mx/'><img src="/tlx.png" alt="Logo Tlaxcala" className="lg:w-38 lg:h-40 mx-auto mt-8"/> </a>

    </div>
  )
}

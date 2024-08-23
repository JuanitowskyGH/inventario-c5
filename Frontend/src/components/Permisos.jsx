import React from 'react'
import { Popover } from "flowbite-react";

export const Permisos = () => {
  return (
    <div>
      <p className="text-gray-500 dark:text-gray-400 pt-6">
                Acerca de los {' '}
                <Popover
                    trigger="hover"
                    content={
                    <div className="w-96 text-sm bg-gray-200 text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        <div className="col-span-3 p-3">
                            <div className="space-y-2">
                            <h2 className="font-semibold text-gray-900 dark:text-white">Permisos</h2>
                            <hr className="w-full h-0.5 mx-auto mt-5 bg-gray-500 border-0 rounded dark:bg-gray-700"/>
                            <p>
                                El <b>Lector</b> puede: <br />
                                - Acceder al sistema <br />
                                - Ver el listado de registros <br />
                                - Ver su perfl de usuario <br /><br /> 
                                
                                El <b>Moderador</b> puede: <br />
                                - Permisos de Lector<br />
                                - Ver el listado de usuarios <br />
                                - Agregar, editar y eliminar registros <br /><br/>

                                El <b>Administrador</b> puede: <br />
                                - Permisos de Moderador <br />
                                - Agregar, editar, eliminar y asignar permisos a usuarios <br />
                            </p>
                            </div>
                        </div>
                    </div>
                    }
                >
                <a href="#" className="text-blue-600 underline hover:no-underline dark:text-blue-500">
                Permisos
                </a>
            </Popover>{' '}
            </p>
    </div>
  )
}

package com.portfolio.HoopNeisser.Interface;

import com.portfolio.HoopNeisser.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un usuario
    public void deletePersona(Long id);
    
    //Buscar un persona
    public Persona findPersona(Long id);
}


import java.io.File;
import java.io.IOException;
import java.util.List;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class Main {
    public static void main(String[] args) {
        
        ObjectMapper objectMapper = new ObjectMapper();

        // Registrar o módulo JavaTime para suporte a java.time.Instant
        objectMapper.registerModule(new JavaTimeModule());

        try {
            File jsonFile = new File("endereco-do-json");
            List<Course> courses = objectMapper.readValue(jsonFile, new TypeReference<List<Course>>() {});

            for (Course course : courses) {
                System.out.println("Course ID: " + course.getId());
                System.out.println("Course Title: " + course.getTitle());
                
                List<Lesson> lessons = course.getLessons();
                
                for (Lesson lesson : lessons) {
                    System.out.println();
                    System.out.println("    id: " + lesson.getId());
                    System.out.println("    title: " + lesson.getTitle());
                    System.out.println("    media: " + lesson.getMedia());
                    System.out.println("    timestamp: " + lesson.getTimestamp());
                }
                System.out.println();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CsvToJson {

    public static class VideoData {
        private String id;
        private String title;
        private int duration;

        public VideoData(String id, String title, int duration) {
            this.id = id;
            this.title = title;
            this.duration = duration;
        }

        @Override
        public String toString() {
            return "VideoData{" +
                    "id='" + id + '\'' +
                    ", title='" + title + '\'' +
                    ", duration=" + duration +
                    '}';
        }
    }

    // Função que converte a lista de linhas CSV em uma lista de VideoData
    public static List<VideoData> csvToJson(List<String> csvData) {
        List<VideoData> result = new ArrayList<>();

        for (String line : csvData) {
            // Divide a linha usando a vírgula: separa o nome do arquivo da duração
            String[] parts = line.split(",");
            if (parts.length < 2) {
                continue; // pula linhas que não estejam no formato esperado
            }
            String rawFileName = parts[0];
            String rawDuration = parts[1];

            // Converte a duração para inteiro, removendo espaços em branco
            int duration = Integer.parseInt(rawDuration.trim());

            // Separa o ID e o restante usando o caractere '_'
            String[] fileParts = rawFileName.split("_", 2);
            String id = fileParts[0];
            String rest = fileParts.length > 1 ? fileParts[1] : "";

            // Remove espaços extras do restante
            String trimmedRest = rest.trim();

            // Em trimmedRest temos algo como "01-01 Visão geral do capítulo.mp4".
            // Queremos remover a primeira parte (ex: "01-01") e pegar o título com a extensão.
            int firstSpaceIndex = trimmedRest.indexOf(" ");
            String titleWithExtension = "";
            if (firstSpaceIndex != -1) {
                titleWithExtension = trimmedRest.substring(firstSpaceIndex + 1);
            } else {
                titleWithExtension = trimmedRest;
            }

            // Remove a extensão ".mp4" do final do título, se existir
            String title = titleWithExtension;
            if (title.endsWith(".mp4")) {
                title = title.substring(0, title.length() - 4);
            }

            // Adiciona o objeto criado na lista de resultados
            result.add(new VideoData(id, title, duration));
        }

        return result;
    }

    public static void main(String[] args) {
        // Exemplo de linhas CSV
        List<String> csvLines = Arrays.asList(
            "4668c219-29fd-40e0-a073-909b5826977f_01-01 Visão geral do capítulo.mp4,222",
            "8b1483a1-ffa1-443e-9c79-36d7463aa88a_01-02 Algoritmos e Lógica de Programação.mp4,96",
            "bf24f7b8-2f81-43e2-974d-3812e6359e45_01-03 Estruturas de dados e sobre o que.mp4,209",
            "ccde5219-fd2f-4411-9b81-ecdfac63f224_01-04 Precisa saber OO antes de ED.mp4,1042"
        );

        List<VideoData> result = csvToJson(csvLines);
        result.forEach(System.out::println);
    }
}

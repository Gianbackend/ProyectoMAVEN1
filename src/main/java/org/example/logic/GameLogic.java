package org.example.logic;

import java.util.ArrayList;
import java.util.List;

public class GameLogic {


    public static List<String> getNextChoices(String decision) {
        List<String> options = new ArrayList<>();

        switch (decision) {
            case "use":
                options.add("hide");
                options.add("show");
                break;

            case "destroy":
                options.add("deny");
                options.add("confront");
                break;

            case "hide":
                options.add("erase");
                options.add("surrender");
                break;

            case "show":
                options.add("manipulate");
                options.add("reject");
                break;

            default:
                // decisión no reconocida
                options.add("error");
        }

        return options;
    }


    public static boolean isFinalScene(String scene) {
        return switch (scene) {
            case "erase", "surrender", "reject", "manipulate" -> true;
            default -> false;
        };
    }
}

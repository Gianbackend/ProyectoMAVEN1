package org.example.logic;

import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

public class GameLogicTest {

    @Test
    void testUseLeadsToHideOrShow() {
        List<String> next = GameLogic.getNextChoices("use");
        assertTrue(next.contains("hide"));
        assertTrue(next.contains("show"));
    }

    @Test
    void testDestroyLeadsToDenyOrConfront() {
        List<String> next = GameLogic.getNextChoices("destroy");
        assertEquals(2, next.size());
        assertTrue(next.contains("deny"));
        assertTrue(next.contains("confront"));
    }

    @Test
    void testFinalScenesDetection() {
        assertTrue(GameLogic.isFinalScene("erase"));
        assertTrue(GameLogic.isFinalScene("reject"));
        assertFalse(GameLogic.isFinalScene("use"));
    }

    @Test
    void testUnknownDecisionReturnsError() {
        List<String> next = GameLogic.getNextChoices("unknown");
        assertEquals(List.of("error"), next);
    }
}


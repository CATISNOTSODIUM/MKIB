export const displayList = []

var preDirectory = "/assets/problems/";

//first integration BEE
import f1 from "/assets/problems/MKIB1/MKIB_Qualifying_Exam_Solutions.pdf";
import f2 from "/assets/problems/MKIB1/MWIT_KVIS_Integration_Bee_Playoff_Solutions.pdf";
import f3 from "/assets/problems/MKIB1/MKIB_Qualifying_Exam.pdf";
import QF1 from "/assets/problems/MKIB1/MKIB_QF1_Slides.pdf";
import QF2 from "/assets/problems/MKIB1/MKIB_QF2_Slides.pdf";
import QF3 from "/assets/problems/MKIB1/MKIB_QF3_Slides.pdf";
import QF4 from "/assets/problems/MKIB1/MKIB_QF4_Slides.pdf";
import SF1 from "/assets/problems/MKIB1/MKIB_SF1_Slides.pdf";
import SF2 from "/assets/problems/MKIB1/MKIB_SF2_Slides.pdf";
import GF from "/assets/problems/MKIB1/MKIB_FINAL_Slides.pdf";
import REPORT from "/assets/problems/MKIB1/MWIT_KVIS_Integration_Bee_Report.pdf";
import POSTER from "/assets/problems/MKIB1/POSTER_intbee.pdf";
displayList.push({
    year: 2023,
    title: "The First MWIT-KVIS Integration Bee",
    description:"BEE: Sunday, November 12 from 8:40 to 10:30 in Rooms 222 and 224 (Physics rooms).",
    tag: "MKIB1",
    otherFiles: [[POSTER, "Poster"], [REPORT, "Report"]],
    qualifyingExam: [
        [f3,"Problem"],[f1,"Solution"],
    ],
    playOffExam: [
        [QF1, "QF1"], [QF2, "QF2"], [QF3, "QF3"], [QF4, "QF4"], [SF1, "SF1"], [SF2, "SF2"], [GF, "Final"], [f2, "Solution"],
    ],
})


const courses = [
  { code: "WDD130", credits: 2, completed: true },
  { code: "WDD131", credits: 2, completed: true },
  { code: "WDD231", credits: 2, completed: false },
  { code: "CSE110", credits: 2, completed: true },
  { code: "CSE111", credits: 2, completed: false }
];
const container = document.querySelector(".courses");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(list) {
  container.innerHTML = "";
  list.forEach(course => {
    const div = document.createElement("div");
    div.textContent = `${course.code} (${course.credits} credits)`;
    div.classList.add("course-code")
    if (course.completed) {
      div.style.background = "#2566AF";
      div.style.color = "white";
    }
    container.appendChild(div);
  });
  const total = list.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = `Total Credits: ${total}`;
}

// Buttons filter
document.getElementById("all").onclick = () => displayCourses(courses);
document.getElementById("wdd").onclick = () => displayCourses(courses.filter(c => c.code.includes("WDD")));
document.getElementById("cse").onclick = () => displayCourses(courses.filter(c => c.code.includes("CSE")));

displayCourses(courses); // Initial display
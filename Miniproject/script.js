const courses = [
    {
        name: "javaScript",
        price: 1000,
        rating: 4.57,
        isAvaialable: false,
        languages: ["Malayalam", "Tamil"],
        mentor: { name: "abc", contact: "123-456-7890" },
    },
    {
        name: "cyber Security",
        price: 1500,
        rating: 4.7,
        isAvaialable: false,
        languages: ["Malayalam", "Tamil"],
        mentor: { name: "abc", contact: "123-456-7890" },
    },
    {
        name: "node.js",
        price: 1200,
        rating: 4.17,
        isAvaialable: false,
        languages: ["Malayalam", "Tamil"],
        mentor: { name: "abc", contact: "123-456-7890" },
    },
    {
        name: "web Designing",
        price: 1000,
        rating: 4.8,
        isAvaialable: false,
        languages: ["Malayalam", "Tamil"],
        mentor: { name: "abc", contact: "123-456-7890" },
    },
    {
        name: "python",
        price: 800,
        rating: 4.44,
        isAvaialable: false,
        languages: ["Malayalam", "Tamil"],
        mentor: { name: "abc", contact: "123-456-7890" },
    }];

const formatName = name => name.charAt(0).toUpperCase() + name.slice(1);

function displayCourses(courses) {
    const courseContainer = document.getElementById("course-container");
    courseContainer.innerHTML = "";
        courses.forEach((course) => {
        const courseUI = `<div class="course-card">
        <h3>${formatName(course.name)}</h3>
        <p>Price: ${course.price}</p>
        <p>Rating: ${Math.round(course.rating * 10) / 10}</p>            <P>Available Languages: ${course.languages}</P>
        <P>Instructor: ${formatName(course.mentor.name)}</P>
        <P>Contact: ${course.mentor.contact}</P>
        </div>`;
        courseContainer.innerHTML += courseUI;
    });
}


function findTopRatedcourse(courses){
    const top = courses.reduce((topCourse, course) => {
        return topCourse.rating > course.rating ? topCourse : course;
    })
    return top;
}


function displayTopRatedCourse(arr){
    const topRatedCourse = findTopRatedcourse(arr);
    const courseUI = `<div class="course-card">
    <h3>${formatName(topRatedCourse.name)}</h3>
    <p>Price: ${topRatedCourse.price}</p>
    <p>Rating: ${Math.round(topRatedCourse.rating * 10) / 10}</p>            
    <P>Available Languages: ${topRatedCourse.languages}</P>
    <P>Instructor: ${formatName(topRatedCourse.mentor.name)}</P>
    <P>Contact: ${topRatedCourse.mentor.contact}</P>
    </div>`;
    const topCourseContainer = document.getElementById("top-course-container");
    topCourseContainer.innerHTML = courseUI;
    
}

const displayCourseCount =(courses) => {
    const countContainer = document.getElementById("course-count");
    countContainer.innerText = `${courses.length} courses`;
};

function getSearchResult(arr, query){
    const result = arr.filter((item) => {
        return item.name.includes(query)
    });
    displayCourses(result);
    displayCourseCount(result)
}


function initPage(){
    displayCourseCount(courses);
    displayCourses(courses);
    displayTopRatedCourse(courses);
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", (event) => {
        getSearchResult(courses, event.target.value);
    });
}

initPage();

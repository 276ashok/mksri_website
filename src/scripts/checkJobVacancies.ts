async function checkJobVacancies() {
  try {
    const response = await fetch('/job_vacancies?is_active=true'); // Assuming backend handles filtering
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data && data.length > 0) {
      console.log("Active job vacancies:", data);
    } else {
      console.log("No active job vacancies found.");
    }
  } catch (error) {
    console.error("Error fetching job vacancies:", error);
  }
}

checkJobVacancies();

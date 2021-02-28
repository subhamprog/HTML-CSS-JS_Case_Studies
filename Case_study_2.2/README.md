This is a case study of HTML 5, CSS 3 and Javascript.
In this project, A simple HTML form is created which is validated by Javascript functions and
Some simple styles are applied by css 3

************
Description
************

page title: Apply for Jobs

fields:


- applicants: appl_id, first_name, last_name, email, phone_num, address, city, state, zip, country_cd (fk1),
              appl_status_cd (fk2), edu_level_cd (fk3), edu_type_cd (fk4), resume_file_name,
              cover_letter_text, date_applied, employed_flag, current_employer_name, years_of_exp..
   first name: text field*
   last name: text field*
   email: text field*
   phone: text field*
   address: text field*
   city: text field*
   state: text field*
   zip: text field*  - integer
   country: drop down (select)*
   education level: drop down (select)*
   education type:  drop down (select)*
   resume:  file upload type *
   cover letter: text area (optional)
   are you employed?: checkbox
   if employed (show only when the above checkbox is checked),
      current employer: text field
      years of experience: numeric
   jobs you want to apply: multi-select (open jobs list)
   [submit] button

    * = required fields
   javascript validations:
     validate that required fields are not blank when submit is clicked
     validate that numberic values are valid
     if possible add validations for phone number and email

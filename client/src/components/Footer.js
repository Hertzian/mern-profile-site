export const Footer = () => {
  const date = new Date.getFullYear()

  return (
    <footer class='footer'>
      <a class='footer-link' href='mailto:lalo@eduardoaguilar.dev'>
        Eduardo Aguilar Copyright &copy; {date('Y')}
      </a>
      <p class='footer-link'>Eduardo Aguilar Copyright &copy; {date('Y')}</p>
      <ul class='social-list'>
        <li class='social-list__item'>
          <a href='{{ $github }}' class='social-list__link'>
            <i class='fab fa-github'></i>
          </a>
        </li>
        <li class='social-list__item'>
          <a href='{{ $linkedin }}' class='social-list__link'>
            <i class='fab fa-linkedin-in'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

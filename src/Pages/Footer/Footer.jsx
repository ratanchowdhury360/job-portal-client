import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer sm:footer-horizontal bg-primary text-base-content p-10">
                <aside>
                    <a class="btn btn-ghost text-4xl font-extrabold tracking-wide">
                        JOB2FIND!
                    </a>
                    <p>
                        Connecting talent with opportunity.

                        <br />
                        Empowering careers, one job at a time.
                    </p>
                </aside>
                <nav>
                    <h6 class="footer-title">Services</h6>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Company</h6>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Legal</h6>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
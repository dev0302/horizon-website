/**
 * member-modal.js - Handles the member modal functionality
 */

// Member data structure
const memberData = {
    'udbhav': {
        name: 'Udbhav',
        position: 'President',
        branch: 'ECE',
        year: '2nd Year',
        description: 'Leading the Horizon team with dedication and vision.',
        image: './horizon_family_images/udbhav.webp',
        role: {
            title: 'Chief leader and overall in-charge of the society',
            responsibilities: [
                'Oversees all departments and ensures smooth functioning',
                'Represents the society in all official events and communications',
                'Makes key decisions, approves event proposals, budgets, and collaborations',
                'Ensures society\'s vision and mission are maintained'
            ]
        }
    },
    'riya': {
        name: 'Riya',
        position: 'Vice President',
        branch: 'CSE',
        year: '1st Year',
        description: 'Creative thinker and effective communicator. Bringing innovative ideas to the team.',
        image: './horizon_family_images/riya.webp',
        role: {
            title: 'Second-in-command and support to the President',
            responsibilities: [
                'Assists the President in operations and decision-making',
                'Takes charge in the President\'s absence',
                'Coordinates between departments for inter-departmental collaboration',
                'Supervises the progress of society\'s short-term and long-term plans'
            ]
        }
    },
    'dev_malik': {
        name: 'Dev Malik',
        position: 'General Secretary and Developer',
        branch: 'CSE',
        year: '1st Year',
        description: 'Handles society records and documents while maintaining the official website - keeping both our operations and digital presence running smoothly.',
        image: './horizon_family_images/dev_malik.webp',
        role: {
            title: 'Administrative and communication lead',
            responsibilities: [
                'Maintains official documentation (minutes of meetings, reports, records)',
                'Develops and updates the society website',
                'Helps manage logistics and scheduling of meetings and events',
                'Works on society policies, documentation, and registration'
            ]
        }
    },
    'areen': {
        name: 'Areen Kaur',
        position: 'General Secretary',
        branch: 'CSE',
        year: '1st Year',
        description: 'Dedicated to organizing and managing society events with precision and creativity.',
        image: './horizon_family_images/areen.webp',
        role: {
            title: 'Administrative and communication lead',
            responsibilities: [
                'Maintains official documentation (minutes of meetings, reports, records)',
                'Coordinates internal communication within the core team and with faculty',
                'Helps manage logistics and scheduling of meetings and events',
                'Works on society policies, documentation, and registration'
            ]
        }
    },
    'yash_nagar': {
        name: 'Yash Nagar',
        position: 'Vice President',
        branch: 'CSE',
        year: '1st Year',
        description: 'Financial strategist ensuring fiscal discipline while contributing to leadership decisions.',
        image: './horizon_family_images/yash_nagar.webp',
        role: {
            title: 'Finance & Leadership',
            responsibilities: [
                'Leads financial planning, budgeting, and expense management',
                'Ensures transparency in fund allocation and reporting',
                'Collaborates with the leadership team on key society decisions',
                'Guides sponsorship and funding strategies for events'
            ]
        }
    }
};
//changeeeeee
const memberData2 = {
    'shiv': {
        name: 'Shiv',
        position: 'Event Management Head',
        branch: 'CSE',
        year: '1st Year',
        image: './horizon_family_images/shiv.webp',
        role: {
            title: 'Backbone of event execution — from planning to on-ground coordination',
            responsibilities: [
                'Conceptualize and plan events (themes, schedules, logistics)',
                'Book venues, manage permissions, seating, and equipment',
                'Handle registration, crowd flow, and team allocation during events',
                'Coordinate with other departments to ensure smooth event delivery'
            ]
        }
    },
    'dushyant': {
        name: 'Dushyant',
        position: 'Event Management Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/dushyant.webp',
        role: {
            title: 'Backbone of event execution — from planning to on-ground coordination',
            responsibilities: [
                'Conceptualize and plan events (themes, schedules, logistics)',
                'Book venues, manage permissions, seating, and equipment',
                'Handle registration, crowd flow, and team allocation during events',
                'Coordinate with other departments to ensure smooth event delivery'
            ]
        }
    },
    'ananya_priya': {
        name: 'Ananya Priya',
        position: 'Public Speaking Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/ananya_priya.webp',
        role: {
            title: 'Voice and face of the society at events',
            responsibilities: [
                'Host events, competitions, and formal ceremonies',
                'Write and rehearse scripts for anchoring and presentations',
                'Represent the society at inter-college events or collaborations',
                'Coordinate with Event & Management to time speeches and transitions'
            ]
        }
    },
    'krishna': {
        name: 'Krishna Bhatia',
        position: 'Public Speaking Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/krishna.webp',
        role: {
            title: 'Voice and face of the society at events',
            responsibilities: [
                'Host events, competitions, and formal ceremonies',
                'Write and rehearse scripts for anchoring and presentations',
                'Represent the society at inter-college events or collaborations',
                'Coordinate with Event & Management to time speeches and transitions'
            ]
        }
    },
    'aditya_pandey': {
        name: 'Aditya Pandey',
        position: 'Video Editing Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/aditya_pandey.webp',
        role: {
            title: 'Storytelling through motion and visuals',
            responsibilities: [
                'Create teasers, event aftermovies, and short reels',
                'Handle basic cinematography if needed during events',
                'Edit promotional videos, trailers, and documentation clips',
                'Sync with Design and Social Media for publishing content'
            ]
        }
    },
    'aahana': {
        name: 'Aahana',
        position: 'Sponsorship Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/aahana.webp',
        role: {
            title: 'Funding and resource acquisition wing',
            responsibilities: [
                'Reach out to potential sponsors and partners',
                'Prepare sponsorship decks and presentations',
                'Negotiate deals and manage sponsor relations',
                'Ensure deliverables to sponsors are met post-event (brand placement, posts, etc.)'
            ]
        }
    },
    'tanvi': {
        name: 'Tanvi',
        position: 'Sponsorship Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/tanvi.webp',
        role: {
            title: 'Funding and resource acquisition wing',
            responsibilities: [
                'Reach out to potential sponsors and partners',
                'Prepare sponsorship decks and presentations',
                'Negotiate deals and manage sponsor relations',
                'Ensure deliverables to sponsors are met post-event (brand placement, posts, etc.)'
            ]
        }
    },
    'shreya_sharma': {
        name: 'Shreya Sharma',
        position: 'Publicity Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/shreya_sharma.webp',
        role: {
            title: 'Outreach and promotions team',
            responsibilities: [
                'Promote events across college campuses and online',
                'Handle offline promotion — posters, banners, announcements',
                'Engage with class representatives and societies for word-of-mouth reach',
                'Collaborate with Social Media for coordinated campaigns'
            ]
        }
    },
    'shivangi': {
        name: 'Shivangi',
        position: 'Publicity Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/shivangi.webp',
        role: {
            title: 'Outreach and promotions team',
            responsibilities: [
                'Promote events across college campuses and online',
                'Handle offline promotion — posters, banners, announcements',
                'Engage with class representatives and societies for word-of-mouth reach',
                'Collaborate with Social Media for coordinated campaigns'
            ]
        }
    },
    'dev_dogra': {
        name: 'Dev Dogra',
        position: 'Social Media Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/dev_dogra.webp',
        role: {
            title: 'Digital presence manager for visibility and engagement',
            responsibilities: [
                'Manage and grow the society\'s Instagram, LinkedIn, and other handles',
                'Post event updates, announcements, and highlights',
                'Maintain a consistent content calendar and brand tone',
                'Engage with followers through comments, DMs, and trends',
                'Collaborate with Design and Video teams for assets'
            ]
        }
    },
    'anushka_prakash': {
        name: 'Anushka Prakash',
        position: 'Social Media Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/anushka_prakash.webp',
        role: {
            title: 'Digital presence manager for visibility and engagement',
            responsibilities: [
                'Manage and grow the society\'s Instagram, LinkedIn, and other handles',
                'Post event updates, announcements, and highlights',
                'Maintain a consistent content calendar and brand tone',
                'Engage with followers through comments, DMs, and trends',
                'Collaborate with Design and Video teams for assets'
            ]
        }
    },
    'pavni': {
        name: 'Pavni',
        position: 'Research & Analysis Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/pavni.webp',
        role: {
            title: 'Strategy and insight team for data-backed decisions',
            responsibilities: [
                'Conduct surveys, post-event analysis, and audience profiling',
                'Research trends for events, competitions, and student preferences',
                'Analyze performance of previous events and suggest improvements',
                'Support content teams with factual data and references'
            ]
        }
    },
    'bhavya_gupta': {
        name: 'Bhavya Gupta',
        position: 'Research & Analysis Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/bhavya_gupta.webp',
        role: {
            title: 'Strategy and insight team for data-backed decisions',
            responsibilities: [
                'Conduct surveys, post-event analysis, and audience profiling',
                'Research trends for events, competitions, and student preferences',
                'Analyze performance of previous events and suggest improvements',
                'Support content teams with factual data and references'
            ]
        }
    },
    'yash_kumar': {
        name: 'Yash Kumar',
        position: 'Creativity & Design Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/yash_kumar.webp',
        role: {
            title: 'Visual brand custodian — makes everything look appealing and cohesive',
            responsibilities: [
                'Design posters, banners, certificates, social media creatives, etc.',
                'Ensure visual consistency and branding across all platforms',
                'Create stage backdrops, merchandise, ID cards as required',
                'Collaborate with the Social Media and Publicity teams'
            ]
        }
    },
    'dhruv': {
        name: 'Dhruv',
        position: 'Creativity & Design Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/dhruv.webp',
        role: {
            title: 'Visual brand custodian — makes everything look appealing and cohesive',
            responsibilities: [
                'Design posters, banners, certificates, social media creatives, etc.',
                'Ensure visual consistency and branding across all platforms',
                'Create stage backdrops, merchandise, ID cards as required',
                'Collaborate with the Social Media and Publicity teams'
            ]
        }
    }
};

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('memberModal');
    // const modal2 = document.querySelector('.modal-content_heads');
    const modalImage = modal.querySelector('.modal-image img');
    const modalName = modal.querySelector('h2');
    const modalPosition = modal.querySelector('.position');
    const modalBranch = modal.querySelector('.branch');
    const modalYear = modal.querySelector('.year');
    const modalDescription = modal.querySelector('.modal-description');
    const roleInfo = modal.querySelector('.role-info');
    const roleContent = modal.querySelector('.role-content');
    const closeBtn = modal.querySelector('.modal-close');

    // Function to open modal with member data
    function openMemberModal(memberId) {
        const member = memberData[memberId] || memberData2[memberId];
        
        if (member) {
            modalImage.src = member.image;
            modalImage.alt = member.name;
            modalName.textContent = member.name;
            modalPosition.textContent = member.position;
            
            // Special handling for Riya's profile
            if (memberId === 'riya') {
                modal.classList.add('riya-profile');
                modal.setAttribute('data-member', 'riya');
                modalBranch.textContent = '';
                modalYear.textContent = '';
                modalDescription.textContent = '';
                roleInfo.style.display = 'none';
                
                // Show resigned stamp
                const resignedStamp = document.querySelector('.resigned-stamp');
                resignedStamp.style.display = 'block';
            } else {
                modal.classList.remove('riya-profile');
                modal.removeAttribute('data-member');
                modalBranch.textContent = member.branch;
                modalYear.textContent = member.year;
                modalDescription.textContent = member.description;
                
                // Handle role information for other members
                if (member.role) {
                    roleInfo.style.display = 'block';
                    roleContent.innerHTML = `
                        <p class="role-title">${member.role.title}</p>
                        <ul class="role-responsibilities">
                            ${member.role.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    `;
                } else {
                    roleInfo.style.display = 'none';
                }
                
                // Hide resigned stamp for other members
                const resignedStamp = document.querySelector('.resigned-stamp');
                resignedStamp.style.display = 'none';
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            feather.replace();
        }
    }

    // Add click event listeners to view profile buttons
    document.querySelectorAll('.view-profile-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.testimonial-card');
            const memberId = card.getAttribute('data-member');
            openMemberModal(memberId);
        });
    });

    // Add click event listeners to testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            if (memberId) {
                openMemberModal(memberId);
            }
        });
    });

    // Update close modal function to reset Riya's specific styles
    function closeModal() {
        modal.classList.remove('active');
        modal.classList.remove('riya-profile');
        modal.removeAttribute('data-member');
        document.querySelector('.modal-content').style.maxWidth = '700px';
        document.querySelector('.modal-content').style.minWidth = '80%';
        document.querySelector('.modal-description').style.display = 'block';
        document.querySelector('.modal-content').style.display = 'flex';
        document.body.style.overflow = '';
        
        // Reset resigned stamp
        const resignedStamp = document.querySelector('.resigned-stamp');
        resignedStamp.style.display = 'none';
    }

    // Update event listeners to use the new closeModal function
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}); 
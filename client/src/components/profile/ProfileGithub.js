import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profileaction'



const ProfileGithub = ({ repos, getGithubRepos, username }) => {

    useEffect(() => {
        getGithubRepos(username);

    }, [getGithubRepos, username]);

    return (
        <div class="">

            <div class="container">

                <h3><i class="fab fa-github"></i>Github Repositories</h3>

            </div>
            <div class="" id="gt">
                {repos === null ? <Spinner /> : (
                    repos.map(repo => (
                        <div key={repo._id} class="row">
                            <div class="col s9 m9 l10">
                                <h4><a href={repo.html_url} target="_blank"
                                    rel="noopener noreferrer">{repo.name}</a></h4>
                                <p>
                                    {repo.description}
                                </p>
                            </div>
                            <div class="col s3 m3 l2">
                                <ul>
                                    <li class="badge blue white-text">Stars: {repo.stargazers_count}</li>
                                    <li class="badge blue white-text">Watchers: {repo.watchers_count}</li>
                                    <li class="badge blue white-text">Forks: {repo.forks_count}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                )}


            </div>

        </div>

    )

}


const mapStateToProps = (state) => {
    return {
        repos: state.profilereducer.repos,

    }
}

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
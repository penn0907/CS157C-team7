package com.api;

import com.model.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;

public interface UserRepository extends Neo4jRepository<User, Long> {

    @Query("MATCH (u:User {username: $username, password: $password}) RETURN u")
    User findByUsernameAndPassword(String username, String password);
    
    @Query("MERGE (u:User {username: $username, password: $password, name: $name, email: $email}) " +
    	       "WITH u " +
    	       "MATCH (l:Location {zipCode: $zipcode}) " +
    	       "MERGE (u)-[:LIVES_IN]->(l) " +
    	       "RETURN u")
    User registerUser(String name, String email, String password, String username, String zipcode);
}
